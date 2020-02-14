import $ from 'jquery';
import './plugin';


class Progress {
    constructor() {
        this.progressCircleOne = $(".progress-bar-one");
        this.progressCircleTwo = $(".progress-bar-two");
        this.progressCircleThree = $(".progress-bar-three");
        this.progressCircleFour = $(".progress-bar-four");
        this.startProgress();
        this.startProgressTwo();
        this.startProgressThree();
        this.startProgressFour();
    }

    startProgress() {
        this.progressCircleOne.circularProgress({
            line_width: 6,
            color: "#e53b24",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: "Financial Services"
        }).circularProgress('animate', 87, 5000);
    }

    startProgressTwo() {
        this.progressCircleTwo.circularProgress({
            line_width: 6,
            color: "#e53b24",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: "Business Services"
        }).circularProgress('animate', 65, 5000);
    }

    startProgressThree() {
        this.progressCircleThree.circularProgress({
            line_width: 6,
            color: "#e53b24",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: "Consumer Products"
        }).circularProgress('animate', 63, 5000);
    }

    startProgressFour() {
        this.progressCircleFour.circularProgress({
            line_width: 6,
            color: "#e53b24",
            starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
            percent: 0, // percent starts from
            percentage: true,
            text: "Energy Environment"
        }).circularProgress('animate', 50, 5000);
    }
}



export default Progress;