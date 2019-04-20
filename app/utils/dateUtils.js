class DateUtils {

    static getCurrentDateWithTheFirstDay() {
        let now = new Date();
        now.setDate(1);
        return now;
    }
}

module.exports= DateUtils;
