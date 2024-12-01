import cv2
import numpy as np

# get a list of files in a folder
import os
from os import listdir
from os.path import isfile, join
from scipy.cluster.vq import kmeans

# get a list of files in a folder
mypath = "./public/static/original/"
onlyfiles = listdir(mypath)
base_export_path = "./public/static/blur/"
dark_base_export_path = "./public/static/dark/"
shallow_base_export_path = "./public/static/shallow/"
compress_base_export_path = "./public/static/compress/"

for i in range(len(onlyfiles)):

    if onlyfiles[i].endswith(".svg"):
        continue

    # load the input image and display it to our screen
    image = cv2.imread(mypath + onlyfiles[i])

    # gaussian blur the image a lot like a lott
    blurred = cv2.GaussianBlur(image, (101, 101), 0)

    # shallow blur
    shallow_blurred = cv2.GaussianBlur(image, (11, 11), 0)

    # decrease exposure
    dark_blurred = cv2.addWeighted(blurred, 0.5, blurred, 0, 0)

    # convert to webp
    cv2.imwrite(
        base_export_path + onlyfiles[i].split(".")[0] + ".webp",
        blurred,
        [cv2.IMWRITE_WEBP_QUALITY, 100],
    )
    cv2.imwrite(
        dark_base_export_path + onlyfiles[i].split(".")[0] + ".webp",
        dark_blurred,
        [cv2.IMWRITE_WEBP_QUALITY, 100],
    )
    cv2.imwrite(
        shallow_base_export_path + onlyfiles[i].split(".")[0] + ".webp",
        shallow_blurred,
        [cv2.IMWRITE_WEBP_QUALITY, 100],
    )
    cv2.imwrite(
        compress_base_export_path + onlyfiles[i].split(".")[0] + ".webp",
        image,
        [cv2.IMWRITE_WEBP_QUALITY, 100],
    )

    print(onlyfiles[i])
