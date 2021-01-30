const { contructCloudinaryUrl } = require('../src/cloudinary');

describe('Cloudinary', () => {

  describe('contructCloudinaryUrl', () => {

    test('it should construct a valid cloudinary URL', () => {
      const input = {
        "imageId": "cloudinary-transform",
        "cloudName": "test",
        "options": {
          "w": 1280,
          "h": 640,
          "c": "fill",
          "q": "auto",
          "f": "auto"
        },
        "text": {
          "text": "Your text here!",
          "format": {
            "font": "Source Sans Pro",
            "size": 70,
            "lineSpacing": -10,
            "weight": "semibold"
          },
          "options": {
            "w": 860,
            "c": "fit",
            "co": "rgb:5E35B1",
            "g": "west",
            "x": 80,
            "y": -60,
            "f": "jpg"
          }
        }
      };

      const expected = 'https://res.cloudinary.com/test/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:5E35B1,g_west,x_80,y_-60,f_jpg,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Your%20text%20here!/cloudinary-transform';

      expect(contructCloudinaryUrl(input)).toBe(expected);
    });

  })

});