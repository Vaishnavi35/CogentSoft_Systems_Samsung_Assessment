import React from 'react'

export default function Anagram() {
    const str1 = 'Madam Curie';
    const str2 = 'Radium came';

    const checkAnagram = (str1, str2) => {
        function normalizeString(str) {
            return str.toLowerCase().split('').sort().join('');
        }

        const normalizedStr1 = normalizeString(str1);
        const normalizedStr2 = normalizeString(str2);
        return normalizedStr1 === normalizedStr2;
    }

    return (
        <div>
            <div className='flex'>
                String 1 : {str1}

            </div>
            <div className='flex'>String 2 : {str2}</div>

            <div> Result: {checkAnagram(str1, str2) ? 'Anagrams' : 'Not Anagrams'}</div>

        </div>
    )
}
