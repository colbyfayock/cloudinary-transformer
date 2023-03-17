# This project is no longer maintained.
# Please see [@cloudinary-util/url-loader](https://github.com/colbyfayock/cloudinary-util/tree/main/packages/url-loader)

## Cloudinary Transformer

Simple functions to translate dynamic structured configuration data to a cloudinary URL.

Works with: https://cloudinary-transform-designer.netlify.app/

## Example Object

```
{
  cloudName: 'fay',
  imageId: 'space-jelly-dev-og-v1_a90cow',
  options: {
    w: '2024',
    h: '1012',
    c: 'fill',
    q: 'auto',
    f: 'auto',
  },
  text: [
    {
      text: 'Headline',
      format: {
        font: 'Source Sans Pro',
        size: '110',
        lineSpacing: -10,
        weight: 'black',
      },
      options: {
        w: '1200',
        c: 'fit',
        co: 'rgb:ffffff',
        g: 'west',
        x: '102',
        y: '-80',
      },
    },
    {
      text: 'Subtext',
      format: {
        font: 'Source Sans Pro',
        size: '66',
        lineSpacing: -10,
        weight: 'bold',
      },
      options: {
        w: 860,
        c: 'fit',
        co: 'rgb:a2cfff',
        g: 'south_west',
        x: '104',
        y: '65',
      },
    },
  ],
}
```

The above would return:

```
https://res.cloudinary.com/fay/image/upload/w_2024,h_1012,c_fill,q_auto,f_auto/w_1200,c_fit,co_rgb:ffffff,g_west,x_102,y_-80,l_text:Source%20Sans%20Pro_110_line_spacing_-10_black:Headline/w_860,c_fit,co_rgb:a2cfff,g_south_west,x_104,y_65,l_text:Source%20Sans%20Pro_66_line_spacing_-10_bold:Subtext/space-jelly-dev-og-v1_a90cow
```

<img src="https://res.cloudinary.com/fay/image/upload/w_2024,h_1012,c_fill,q_auto,f_auto/w_1200,c_fit,co_rgb:ffffff,g_west,x_102,y_-80,l_text:Source%20Sans%20Pro_110_line_spacing_-10_black:Headline/w_860,c_fit,co_rgb:a2cfff,g_south_west,x_104,y_65,l_text:Source%20Sans%20Pro_66_line_spacing_-10_bold:Subtext/space-jelly-dev-og-v1_a90cow" alt="Example Cloudinary image" />

See live at https://spacejelly.dev/posts/how-to-fetch-graphql-data-in-next-js-with-apollo-graphql/
