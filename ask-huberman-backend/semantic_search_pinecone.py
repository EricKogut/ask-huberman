import cohere
import numpy as np
import pinecone
from text_parser import tokenized_data
co = cohere.Client("FFFFFFFFFFFFFFFFFFFFFFFFFFFF")


embeds = co.embed(
    texts=tokenized_data,
    model='large',
    truncate='LEFT'
).embeddings


shape = np.array(embeds).shape

pinecone.init("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
              environment='us-west1-gcp')

index_name = 'cohere-pinecone-trec'

# if the index does not exist, we create it
if index_name not in pinecone.list_indexes():
    pinecone.create_index(
        index_name,
        dimension=shape[1],
        metric='cosine'
    )

# connect to index
index = pinecone.Index(index_name)

batch_size = 32

ids = [str(i) for i in range(shape[0])]
# create list of metadata dictionaries
meta = [{'text': text} for text in tokenized_data]

# create list of (id, vector, metadata) tuples to be upserted
to_upsert = list(zip(ids, embeds, meta))

for i in range(0, shape[0], batch_size):
    i_end = min(i+batch_size, shape[0])
    index.upsert(vectors=to_upsert[i:i_end])

# let's view the index statistics
print(index.describe_index_stats())
