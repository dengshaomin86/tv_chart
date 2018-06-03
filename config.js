/*处理数据*/
function dealData(data) {
    /**
     * 数据结构
     * [1525293960, 0, 0, "0.00007822", "0.00007825", "0.00007830", "0.00007816", "3686.00000000"]
     * [date0, ''1, ''2, open3, close4, highest5, lowest6, volume7]
     */

    var resp = {
        nextTime: 0,
        s: "no_data"
    };

    var kDataLastDate = data[data.length - 1][0];

    if (window.kDataLastDate != kDataLastDate) {
        resp = {
            t: [],
            o: [],
            c: [],
            h: [],
            l: [],
            v: [],
            s: 'ok',
        };

        $.each(data, function (i, item) {
            resp.t.push(Number(item[0]));
            resp.o.push(Number(item[3]));
            resp.c.push(Number(item[4]));
            resp.h.push(Number(item[5]));
            resp.l.push(Number(item[6]));
            resp.v.push(Number(item[7]));
        });

        window.kDataLastDate = kDataLastDate
    }

    return resp

}


/*设置时区*/
var supported_resolutions = ["1", "5", "15", "30", "60", "D", "3D", "W", "3W"];