
import os
import pandas as pd
from pathlib import Path
import re
import nltk.data
from sys import getsizeof
import numpy as np


def read_all_data():
    data = {}
    for root, dirs, files in os.walk("./transcripts/txt"):
        counter = 0
        print(len(files), "files are being parsed")

        for name in files:
            if counter >= 100:
                break
            else:
                counter += 1
            fpath = os.path.join(root, name)

            fp = open(fpath)
            current_data = (fp.read().replace("\n", " "))
            data[name] = current_data

    return data


def tokenize_data(data):
    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

    data_output = []
    sentence_amount = 0
    output_string = ''
    for index, key in enumerate(data):

        tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
        sentences = tokenizer.tokenize(data[key])

        if index <= 40:
            for sentence_index, sentence in enumerate(sentences):
                data_output.append(sentence)

    return data_output


raw_data = read_all_data()

tokenized_data = (tokenize_data(raw_data))
