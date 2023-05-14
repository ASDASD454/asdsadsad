import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    body {
        ${tw`font-sans text-neutral-200`};
        letter-spacing: 0.015em;
        background-color:hsla(229,70%,9%);
        background-image:
        radial-gradient(at 0% 100%, hsla(225,84%,4%) 0px, transparent 50%),
        radial-gradient(at 97% 97%, hsla(225,84%,4%) 0px, transparent 50%),
        radial-gradient(at 32% 1%, hsla(227,70%,10%) 0px, transparent 50%),
        radial-gradient(at 68% 5%, hsla(226,78%,5%) 0px, transparent 50%),
        radial-gradient(at 95% 42%, hsla(227,70%,10%) 0px, transparent 50%);
        min-height:100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-neutral-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px hsl(211, 10%, 53%), inset 0 0 0 4px hsl(209deg 18% 30%);
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;