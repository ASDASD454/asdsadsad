import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded no-underline text-neutral-200 items-center bg-neutral-700/40 backdrop-blur p-4 border border-transparent transition-colors duration-150 overflow-hidden`};

    ${(props) => props.$hoverable !== false && tw`hover:border-neutral-600`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-neutral-500 p-3`};
    }
`;
