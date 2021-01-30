# Cloudinary Transformer

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

See live at https://spacejelly.dev/posts/how-to-fetch-graphql-data-in-next-js-with-apollo-graphql/
