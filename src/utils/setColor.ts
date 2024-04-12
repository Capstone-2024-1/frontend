export const setColor = (name: string) => {
    // if(name === "main")return process.env.NEXT_PUBLIC_COLOR_PRIMARY;
    if(name === "main")return "#028940";
    else if(name === "sub")return "#07CA61";
    else if(name === "background")return "#F5F5F5";
    else if(name === "emphasize")return '#07CA61';
    else if(name === "lightGrey")return '#F5F5F5';
    else if(name === "grey")return '#E0E0E0';
    else if(name==="middleGrey")return "#9E9E9E";
    else return "white";
}