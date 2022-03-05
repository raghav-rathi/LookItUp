# import json
# import sys

# list = [
#         {"name":"Abhishek", "rating": "best", "description": "I am cool"},
#         {"name":"Anita", "rating": "best", "description": "I am awesome"}
#     ];

# print("F I L E   N A M E   :   ", sys.argv[1])
# print(json.dumps(list))



from copyreg import pickle
import re
import datetime
import sys
import time
import io
import cv2
import os
import json
from config import Config
import numpy as np
import pytesseract
from PIL import Image
from post_ocr import post_ocr
from datetime import datetime
import pandas as pd



def apply_threshold(img, argument):
    # Applying blur (each of which has its pros and cons, however,
    # median blur and bilateral filter usually perform better than gaussian blur.):

    switcher = {
        "GaussianBlur": cv2.threshold(cv2.GaussianBlur(img, (5, 5), 0), 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1],
        "bilateralFilter": cv2.threshold(cv2.bilateralFilter(img, 5, 75, 75), 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1],
        "medianBlur": cv2.threshold(cv2.medianBlur(img, 3), 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1],
        "GaussianBlurAdaptive": cv2.adaptiveThreshold(cv2.GaussianBlur(img, (5, 5), 0), 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 2),
        "bilateralFilterAdaptive": cv2.adaptiveThreshold(cv2.bilateralFilter(img, 9, 75, 75), 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 2),
        "medianBlurAdaptive": cv2.adaptiveThreshold(cv2.medianBlur(img, 3), 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 31, 2)
    }
    return switcher.get(argument, "Invalid method")



if (sys.platform.count('win32') > 0):
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

img1 =  open(sys.argv[1], "rb")
img1 = img1.read()

img = Image.open(io.BytesIO(img1))

# Rescaling the image
img = np.array(img)

img = cv2.resize(img, None, fx=1.5, fy=1.5,
                    interpolation=cv2.INTER_CUBIC)

# Converting image to gray-scale
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Applying dilation and erosion to remove the noise
kernel = np.ones((1, 1), np.uint8)
img = cv2.dilate(img, kernel, iterations=1)
img = cv2.erode(img, kernel, iterations=1)

# Apply threshold to get image with only black and white
list_of_methods = ["GaussianBlur", "bilateralFilter", "medianBlur",
    "GaussianBlurAdaptive", "bilateralFilterAdaptive", "medianBlurAdaptive"]
img = apply_threshold(img, list_of_methods[3])

scanned_text = pytesseract.image_to_string(img)

ingredient_list = post_ocr(scanned_text)


print(json.dumps(ingredient_list))








