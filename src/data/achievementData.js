import degree from '../assets/png/degree.png'
import ccna from '../assets/png/ccna.png'
import wip from '../assets/png/wip.jpg'


export const achievementData = {
    bio : "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction. - Bill Gates (Co-founder of Microsoft)",
    achievements : [
        {
            id : 1,
            title : 'CISCO NETWORKING ACADEMY',
            details : ' CCNA',
            date : '2018',
            field : 'NETWORKING',
            image : ccna
        },
        {
            id : 2,
            title : 'UNIVERISITY MALAYSIA PAHANG',
            details : ' BACHELOR DEGREE IN SOFTWARE ENGINEERING',
            date : '2021',
            field : 'DEGREE',
            image : degree
        },
        {
            id : 3,
            title : 'Docker',
            details : 'Learning Docker via Udemy (In Progress)',
            date : '01/11/2024',
            field : 'DevOps Field',
            image : wip
        }

    ]
}


