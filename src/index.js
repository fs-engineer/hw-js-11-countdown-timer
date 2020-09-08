import './styles.css';
import { CountdownTimer } from './js/countdownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 03,2020'),
});

timer.startTimer();
