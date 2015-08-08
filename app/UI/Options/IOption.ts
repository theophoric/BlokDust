/**
 * Created by luketwyman on 16/01/2015.
 */
import Size = minerva.Size;
import OptionHandle = require("./OptionHandle");
import OptionSwitch = require("./OptionSwitch");
import OptionSubHandle = require("./OptionSubHandle");

interface IOption {
    Type: String;
    Position: Point;
    Size: Size;
    Name: string;
    Setting: string;
    DisplayConversion: any;


    Origin: number;
    Selected: boolean;
    Log: boolean;
    Value: number;
    Min: number;
    Max: number;
    Quantised: boolean;

    EValue: number[];
    EMin: number[];
    EMax: number[];
    EPerc: any[];

    HandleRoll: any[];
    SubHandleRoll: any[];
    Handles: OptionHandle[];
    SubHandles: OptionSubHandle[];

    ButtonStyle: number;
    ButtonNo: number;

    Spread: number;

    Track: string;
    User: string;

    Waveform: number[];
    Mode: boolean;
    EmptyString: string;

    Switches: OptionSwitch[];

    Draw(ctx,units,i,panel): void;

}

export = IOption;