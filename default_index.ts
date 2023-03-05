
"use strict";

function null_func(): void {
    try {
        let string_of_chars: string = '';
    } catch (err) {
        if (err) {
            console.clear();
            console.log(err);
        };
    };
};