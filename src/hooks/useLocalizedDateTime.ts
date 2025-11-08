import {useEffect, useState} from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import "dayjs/locale/fa";
import "dayjs/locale/en";
import {useTranslation} from "react-i18next";

dayjs.extend(jalaliday);

export const useLocalizedDateTime = () => {
    const {i18n} = useTranslation();
    const [localizedDate, setLocalizedDate] = useState<string>("");
    const [localizedTime, setLocalizedTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = dayjs();

            if (i18n.language === "fa") {
                setLocalizedDate(
                    now.calendar("jalali").locale("fa").format("D MMMM YYYY")
                );
                setLocalizedTime(now.locale("fa").format("HH:mm"));
            } else {
                setLocalizedDate(now.locale("en").format("MMMM D, YYYY"));
                setLocalizedTime(now.locale("en").format("hh:mm A"));
            }
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [i18n.language]);

    return {localizedDate, localizedTime};
};