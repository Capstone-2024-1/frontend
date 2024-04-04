export const setColor = (name: string) => {
    if(name === "main")return process.env.NEXT_PUBLIC_COLOR_PRIMARY;
    else if(name === "sub")return "#07CA61";
    else if(name === "background")return "#F5F5F5";
    else if(name === "emphasize")return '#07CA61';
    else if(name === "lightGrey")return '#F5F5F5';
}