import './styles.css';
import { CountdownTimer } from './js/countdownTimer';

// const targetDate = new Date('Dec 03,2020');
// const timer = new CountdownTimer(Date.parse(targetDate));
const timer = new CountdownTimer('Dec 03,2020');
timer.startTimer();
