import { useDispatch, useSelector } from "react-redux";

import { Card, Metric, ProgressBar, Text } from "@tremor/react";

import { filterCommentsbYRating } from '../../redux/actions/actions'

import './commentStats.css'

const CommentStats = () => {

    const dispatch = useDispatch();
    const allComments = useSelector(state => state.commentsBackUp)

    function handleClick(value) {
        console.log('prueba', value)
        dispatch(filterCommentsbYRating(value))
    }
    const totalComments = [];
    for (let i = 1; i < 6; i++) {
      const eachRating = allComments.filter(comment => comment.rating === i);
      totalComments.push(eachRating.length);
    }

    const percentage = [];

for (let i = 0; i < 5; i++) {
   const individualPercentage = (totalComments[i] * 100) / allComments.length ;
percentage.push(individualPercentage);
   
}


    return (
        <div>
            <Card value={1} className="max-w-md mx-auto mb-5 font-bold"
                onClick={() => handleClick(5)} >
                <Text>Calificación 5 ⭐</Text>
                <Metric>{totalComments[4]} votos</Metric>
                <ProgressBar value={percentage[4]} />
            </Card>
            <Card className="max-w-md mx-auto mb-5 font-bold"
                onClick={() => handleClick(4)}>
                <Text>Calificación 4 ⭐</Text>
                <Metric>{totalComments[3]} votos</Metric>
                <ProgressBar value={percentage[3]} />
            </Card>
            <Card className="max-w-md mx-auto mb-5 font-bold"
                onClick={() => handleClick(3)}>
                <Text>Calificación 3 ⭐</Text>
                <Metric>{totalComments[2]} votos</Metric>
                <ProgressBar value={percentage[2]} />
            </Card>
            <Card className="max-w-md mx-auto mb-5 font-bold"
                onClick={() => handleClick(2)}>
                <Text>Calificación 2 ⭐</Text>
                <Metric>{totalComments[1]} votos</Metric>
                <ProgressBar value={percentage[1]} />
            </Card>
            <Card className="max-w-md mx-auto mb-5 font-bold"
                onClick={() => handleClick(1)}>
                <Text>Calificación 1 ⭐</Text>
                <Metric>{totalComments[0]} votos</Metric>
                <ProgressBar value={percentage[0]} />
            </Card>
        </div>
    );
}

export default CommentStats;