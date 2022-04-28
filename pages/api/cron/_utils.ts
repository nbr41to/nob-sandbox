import cron from 'node-cron';

const task = cron.schedule(
  '*/3 * * * * *',
  async () => {
    console.log('3秒おきに実行するよ');
  },
  {
    scheduled: false,
  },
);

export const startSchedule = () => {
  task.start();
};

/* Stopできん */
export const stopSchedule = () => {
  task.stop();
};

/* このscriptが再び走ることを確認 */
console.log('cron.js');
