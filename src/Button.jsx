function printHello(event){
    console.log("hello");
    console.log(event);
}
function printBye(){
    console.log("Bbye!");
}
function handDbClick(){
    console.log("double click");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>click me!</button>
            <p onClick={printBye}>this para is for event demo</p>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ab ullam, porro dolores laboriosam laborum facilis? Nemo, tempore officiis assumenda maiores labore aut cum modi, sapiente dicta aperiam facilis beatae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque velit, repudiandae hic quos reiciendis a maiores voluptatem. Vitae autem eligendi reiciendis enim maiores debitis asperiores possimus itaque consectetur, distinctio accusamus?
                Consequatur quas corrupti officiis ipsum, reprehenderit veniam quos. Eveniet aut quidem quos repellat molestias ipsam, fugiat cum iste qui facilis. Ex minima est at dicta maxime, necessitatibus porro natus nemo!
                Incidunt omnis aut provident, suscipit nesciunt, id magni quis sunt sit, accusantium blanditiis fugit debitis in! Perferendis dolores quia aliquam labore placeat nostrum ullam quam. Beatae voluptas in ducimus reprehenderit.
                Obcaecati ipsum odio aut necessitatibus error laboriosam iure amet illum ea, nemo voluptatibus itaque a asperiores dolores sequi, in optio! Nam, perspiciatis id? Voluptatum maxime similique quos delectus! Consequuntur, facere!
            </p>
            <button onDoubleClick={handDbClick}>double click me</button>
        </div>
    );
}