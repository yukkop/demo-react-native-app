import React from 'react';
import { SvgCss, SvgXml } from 'react-native-svg';


const xml = `
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
    <path 
    fill="currentColor" 
    d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path>
</svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;