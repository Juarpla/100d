const DATING_START_YEAR = 2025;
const DATING_START_MONTH = 7; // August, zero-based
const ANNIVERSARY_DAY = 15;

export interface DatingAnniversary {
  targetDate: Date;
  monthName: string;
  monthsTogether: number;
}

export function getNextDatingAnniversary(now: Date = new Date()): DatingAnniversary {
  const targetDate = new Date(now.getFullYear(), now.getMonth(), ANNIVERSARY_DAY);

  // The instant the 15th arrives, start counting toward the following month.
  if (now >= targetDate) {
    targetDate.setMonth(targetDate.getMonth() + 1);
  }

  return {
    targetDate,
    monthName: targetDate.toLocaleString('en-US', { month: 'long' }),
    monthsTogether:
      (targetDate.getFullYear() - DATING_START_YEAR) * 12 +
      targetDate.getMonth() -
      DATING_START_MONTH,
  };
}
