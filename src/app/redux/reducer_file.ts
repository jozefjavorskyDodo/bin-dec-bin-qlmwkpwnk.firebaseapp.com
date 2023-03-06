

import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import { bin_char_dec } from "./actions_file";


export const initialState: string = '';
function CEDTFs(): string {
    if (String(
        document.getElementById("dropdown")?.getAttribute("val")) === ''
    ) {
        return String('');
    } else {
        var yndex: number = 7;
        var bin_arr: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
        var rvrsd_bin_arr: number[] = [];
        var dec_char: number = Number(
            document.getElementById("dropdown")?.getAttribute("val")?.charCodeAt(0)
        );
        var bin_str_output: string = '';
        var dec_int_output: number = Number(0);
        while (dec_char > 0) {
            if ((dec_char % 2) === 0) {
                dec_char /= 2;
                bin_arr[yndex] = 0;
            } else {
                dec_char = Math.trunc(dec_char / 2);
                bin_arr[yndex] = 1;
            };
            yndex -= 1;
        };
        for (let subitem in bin_arr) bin_str_output += String(bin_arr[subitem]);
        for (let ft_xyz_i_terator_yndex = 7;
            ft_xyz_i_terator_yndex >= 0;
            ft_xyz_i_terator_yndex--) {
            rvrsd_bin_arr.push(bin_arr[ft_xyz_i_terator_yndex]);
        };
        for (let _sub_item_ in rvrsd_bin_arr) {
            if (Number(rvrsd_bin_arr[_sub_item_]) === Number(1)) {
                dec_int_output += (2 ** Number(_sub_item_));
            };
        };
        return String(
            " ~~~~~< " +
            String(bin_str_output) +
            " >~~~~< " +
            String(dec_int_output) +
            " >~~~~~ "
        );
    };
};
export const input_reducer_output = createReducer(
    initialState,
    on(bin_char_dec, () => CEDTFs())
);
