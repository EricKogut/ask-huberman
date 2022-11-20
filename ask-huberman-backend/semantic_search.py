import cohere
import numpy as np
import pinecone

co = cohere.Client("FFFFFFFFFFFFFFFFFFFF")

index_name = 'cohere-pinecone-trec'
pinecone.init("FFFFFFFFFFFFFFFFFFFFFFFF",
              environment='us-west1-gcp')

# connect to index
index = pinecone.Index(index_name)


def search_database(query):
    generated_prompt = co.generate(
        prompt=query,
        model='command-xlarge-20221108',
        temperature=0.5,
        max_tokens=80
    ).generations[0].text

    # create the query embedding
    xq = co.embed(
        texts=[3],
        model='large',
        truncate='LEFT'
    ).embeddings

    print(np.array(xq).shape)

    # query, returning the top 5 most similar results
    res = index.query(xq, top_k=10, include_metadata=True)

    output = ''

    for match in res['matches']:
        print(f"{match['score']:.2f}: {match['metadata']['text']}")
        if match['score'] > 0.45:
            output += match['metadata']['text'] + ' '

    if output == '':
        return "Hmm. Not sure about that one just yet. Please try again another time."
    response = co.generate(
        model='xlarge',
        prompt=output,
        max_tokens=200,
        temperature=0.5,
        k=0,
        p=1,
        frequency_penalty=0.2,
        presence_penalty=0.1,
        stop_sequences=["--"],
        return_likelihoods='NONE')

    print('Prediction: {}'.format(response.generations[0].text))
    return response.generations[0].text
