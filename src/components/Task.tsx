
type TaskProps={
title:string
description:string
isCompleted:boolean
}

function Task({title, description, isCompleted}:TaskProps){
    const trueColor={
        backgroundColor:'green',
        textDecoration: 'line-through'
    }

       const falseColor={
        backgroundColor:'grey'
    }
    const background=isCompleted?trueColor:falseColor;


    return <div style={background}>

<h3>{title}</h3>
<p>{description}</p>

        
    </div>
}

export default Task;
