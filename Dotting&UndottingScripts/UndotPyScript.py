import sys
from pathlib import Path

from PIL import Image
import numpy as np

target_filepath = Path(sys.argv[1])
img = Image.open(target_filepath).convert('RGBA')  # make sure image is RGBA
img_3x_arr = np.array(img)
output_image = np.zeros(shape=[img_3x_arr.shape[0] // 3, img_3x_arr.shape[1] // 3, 4], dtype=np.uint8)

for x in range(img_3x_arr.shape[0] // 3):
    for y in range(img_3x_arr.shape[1] // 3):
        output_image[x, y] = img_3x_arr[3 * x + 1, 3 * y + 1]

img_3x_back = Image.fromarray(output_image)
img_3x_back.save(f'!compressed_{target_filepath.name}')