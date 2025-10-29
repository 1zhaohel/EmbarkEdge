// Lesson data for all financial literacy modules

export const budgetingLessons = [
  {
    id: 'budgeting-1',
    title: 'What is a Budget?',
    description: 'Learn the basics of budgeting',
    content: `A budget is simply a plan for your money. Think of it as a roadmap that shows you where your money is going each month.

**Why Budget?**
• Know exactly how much money you have
• Avoid running out of money before the month ends
• Save for things you really want
• Reduce stress about money

**How It Works:**
Instead of spending randomly and hoping there's enough money left, a budget helps you decide in advance where each dollar will go. You track what comes in (income) and what goes out (expenses).

**The Secret:**
The goal isn't to restrict yourself—it's to spend intentionally on things that matter to you while avoiding regret purchases.`,
    questions: [
      {
        id: 'b1-q1',
        type: 'multiple-choice' as const,
        question: 'What is the main purpose of a budget?',
        options: [
          'To restrict your spending completely',
          'To track and plan how you spend your money',
          'To make you feel guilty about purchases',
          'To impress your parents'
        ],
        correctAnswer: 'To track and plan how you spend your money',
        explanation: 'A budget is a tool that helps you understand where your money goes and plan for your financial goals. It\'s about being intentional with your spending, not restricting yourself completely.',
        points: 50
      },
      {
        id: 'b1-q2',
        type: 'scenario' as const,
        question: 'You just got your first part-time job and earn $400/month. What should you do first?',
        scenario: 'You\'re 16 and just started working at a local cafe. You earn $400 per month after taxes. Your friends are suggesting you spend it all on clothes and entertainment.',
        options: [
          'Spend it all on fun stuff - you earned it!',
          'Save every penny - never spend anything',
          'Create a budget to balance saving and spending',
          'Give it all to your parents'
        ],
        correctAnswer: 'Create a budget to balance saving and spending',
        explanation: 'Creating a budget helps you enjoy your money while also building good financial habits. A common approach is the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.',
        consequences: {
          'Spend it all on fun stuff - you earned it!': 'You have fun now but miss opportunities to save for bigger goals',
          'Save every penny - never spend anything': 'You build savings but miss out on enjoying your hard work',
          'Create a budget to balance saving and spending': 'You build good habits while still enjoying your income',
          'Give it all to your parents': 'While generous, you miss learning to manage money yourself'
        },
        points: 75
      },
      {
        id: 'b1-q3',
        type: 'true-false' as const,
        question: 'You should track every single penny you spend to have a good budget.',
        correctAnswer: 'False',
        explanation: 'While tracking spending is important, obsessing over every penny can be exhausting and unrealistic. Focus on tracking major categories and spending patterns rather than every tiny purchase.',
        points: 40
      }
    ],
    totalPoints: 165
  },
  {
    id: 'budgeting-2',
    title: 'The 50/30/20 Rule',
    description: 'Master the most popular budgeting method',
    content: `The 50/30/20 rule is one of the simplest and most effective budgeting strategies. It divides your income into three categories:

**50% - Needs** (Things you must have)
• Housing costs (rent/mortgage)
• Food and groceries
• Transportation (gas, bus pass)
• Phone bill
• Basic utilities

**30% - Wants** (Things you enjoy)
• Entertainment (movies, gaming, streaming)
• Eating out with friends
• Shopping for non-essentials
• Hobbies and fun activities

**20% - Savings & Goals** (Your future)
• Emergency fund
• Saving for big purchases (car, education)
• Paying off debt
• Investing for the future

**Why It Works:**
This rule is flexible enough to enjoy life while ensuring you're building financial security. You don't have to track every penny—just stay within these broad categories.`,
    questions: [
      {
        id: 'b2-q1',
        type: 'multiple-choice' as const,
        question: 'In the 50/30/20 rule, what does the 50% represent?',
        options: [
          'Entertainment and fun activities',
          'Savings and investments',
          'Essential needs like food and transportation',
          'Shopping and clothes'
        ],
        correctAnswer: 'Essential needs like food and transportation',
        explanation: 'The 50% goes to needs - things you must have to live and work, like housing, food, transportation, and basic utilities.',
        points: 50
      },
      {
        id: 'b2-q2',
        type: 'scenario' as const,
        question: 'You earn $600/month. Using the 50/30/20 rule, how would you divide it?',
        scenario: 'You work part-time and earn $600 monthly. You need to pay for gas ($60), phone bill ($40), lunch money ($80), and want to save for a car.',
        options: [
          '$300 needs, $180 wants, $120 savings',
          '$200 needs, $200 wants, $200 savings',
          '$400 needs, $100 wants, $100 savings',
          '$500 needs, $50 wants, $50 savings'
        ],
        correctAnswer: '$300 needs, $180 wants, $120 savings',
        explanation: 'With $600 income: 50% = $300 for needs, 30% = $180 for wants, 20% = $120 for savings. Your gas, phone, and lunch ($180) fit within the needs category.',
        consequences: {
          '$300 needs, $180 wants, $120 savings': 'Perfect! You follow the rule and build strong savings habits',
          '$200 needs, $200 wants, $200 savings': 'Great savings rate, but you might not cover all essential needs',
          '$400 needs, $100 wants, $100 savings': 'Too much for needs - you might be overspending on necessities',
          '$500 needs, $50 wants, $50 savings': 'Very little for savings and fun - this isn\'t sustainable'
        },
        points: 100
      }
    ],
    totalPoints: 150
  }
];

export const savingsLessons = [
  {
    id: 'savings-1',
    title: 'Why Save Money?',
    description: 'Understand the power of saving',
    content: `Saving money isn't about being cheap—it's about having choices and security in your life.

**The Power of Savings:**
• **Freedom** - Buy what you want when you want it
• **Peace of Mind** - Handle emergencies without panic
• **Opportunities** - Take chances when they come up
• **Less Stress** - Money problems are one less worry

**Start Small, Think Big:**
Even saving $25 per month adds up to $300 in a year! That could be:
• A new phone
• Concert tickets for you and friends
• Part of a car down payment
• Emergency fund for unexpected costs

**The Earlier, The Better:**
Starting to save as a teenager gives you a huge advantage. Thanks to compound interest (earning interest on your interest), money saved young grows much faster than money saved later.

**Emergency Funds:**
Financial experts recommend having 3-6 months of expenses saved. As a student, even $500-$1000 can handle most emergencies like phone repairs, car trouble, or unexpected expenses.`,
    questions: [
      {
        id: 's1-q1',
        type: 'multiple-choice' as const,
        question: 'What\'s the best reason to start saving money as a teenager?',
        options: [
          'To impress your friends',
          'Because your parents told you to',
          'To have money for emergencies and goals',
          'To become the richest person in school'
        ],
        correctAnswer: 'To have money for emergencies and goals',
        explanation: 'Saving gives you financial security and helps you achieve your goals. Starting early also builds great habits and lets compound interest work in your favor.',
        points: 50
      },
      {
        id: 's1-q2',
        type: 'scenario' as const,
        question: 'Your phone screen just cracked and repair costs $150. What happens next?',
        scenario: 'You\'ve been saving $50/month for 6 months and have $300 in savings. Your phone screen cracks and needs a $150 repair.',
        options: [
          'Ask parents for money and keep your savings',
          'Use your savings - this is exactly why you saved!',
          'Just live with the cracked screen forever',
          'Buy a completely new phone with credit'
        ],
        correctAnswer: 'Use your savings - this is exactly why you saved!',
        explanation: 'Emergency funds are meant to be used for unexpected expenses like this. You saved for this exact situation, and you still have $150 left over!',
        consequences: {
          'Ask parents for money and keep your savings': 'You avoid the problem but miss learning to use savings responsibly',
          'Use your savings - this is exactly why you saved!': 'Perfect! You handle the emergency independently and still have money left',
          'Just live with the cracked screen forever': 'You keep your savings but the crack might get worse and cost more later',
          'Buy a completely new phone with credit': 'You overspend and create debt when you had a simpler solution'
        },
        points: 75
      }
    ],
    totalPoints: 125
  }
];

export const creditLessons = [
  {
    id: 'credit-1',
    title: 'Credit Score Basics',
    description: 'Learn what affects your credit score',
    content: `Your credit score is like your financial report card—it tells lenders how responsible you are with borrowed money. In Canada, scores range from 300 to 900.

**What Affects Your Credit Score:**
1. **Payment History (35%)** - Most important!
   • Pay all bills on time
   • Even one late payment can hurt

2. **Credit Utilization (30%)**
   • How much credit you're using vs. your limit
   • Keep it below 30% (if limit is $1000, use less than $300)

3. **Length of Credit History (15%)**
   • How long you've had credit
   • Longer is better

4. **Types of Credit (10%)**
   • Mix of credit cards, loans, etc.

5. **New Credit (10%)**
   • Don't apply for too much at once

**Why It Matters:**
• Get approved for apartments
• Lower insurance rates
• Better interest rates on loans and credit cards
• Some employers check credit scores
• Qualify for the best phone plans

**Building Good Credit:**
Start early with a low-limit credit card, always pay on time, and keep balances low. Good habits now = easier life later!`,
    questions: [
      {
        id: 'c1-q1',
        type: 'multiple-choice' as const,
        question: 'What has the biggest impact on your credit score?',
        options: [
          'How much money you make',
          'Whether you pay bills on time',
          'How many social media followers you have',
          'What kind of car you drive'
        ],
        correctAnswer: 'Whether you pay bills on time',
        explanation: 'Payment history makes up 35% of your credit score - the largest factor. Paying all bills on time is the most important thing you can do for your credit.',
        points: 60
      },
      {
        id: 'c1-q2',
        type: 'true-false' as const,
        question: 'Checking your own credit score will hurt your credit.',
        correctAnswer: 'False',
        explanation: 'Checking your own credit score is called a "soft inquiry" and doesn\'t affect your score at all. You should check it regularly to monitor your financial health.',
        points: 40
      }
    ],
    totalPoints: 100
  }
];

export const investmentLessons = [
  {
    id: 'investment-1',
    title: 'Compound Interest Magic',
    description: 'See how money grows over time',
    content: `Compound interest is often called the "eighth wonder of the world"—and for good reason. It's how your money makes money, which then makes more money!

**How It Works:**
Imagine you invest $1,000 at 7% annual return:
• Year 1: $1,000 + $70 = $1,070
• Year 2: $1,070 + $74.90 = $1,144.90
• Year 3: $1,144.90 + $80.14 = $1,225.04

Notice how the amount you earn increases each year? That's compound interest!

**The Time Factor:**
The real magic happens over longer periods:
• $1,000 invested at age 17 → ~$15,000 by age 67
• $1,000 invested at age 25 → ~$7,600 by age 67

Starting just 8 years earlier DOUBLES your money!

**Key Principles:**
1. **Start Early** - Time is your biggest advantage
2. **Be Consistent** - Regular contributions add up
3. **Be Patient** - Compound interest needs time to work
4. **Reinvest Earnings** - Don't withdraw; let it grow

**Real-World Application:**
This is why RESPs are so powerful—government grants + investment growth + time = significantly more money for your education!`,
    questions: [
      {
        id: 'i1-q1',
        type: 'scenario' as const,
        question: 'You have $1000 to invest. When should you start?',
        scenario: 'You\'re 17 with $1000 saved. You could invest it now, or wait until you\'re 25 and have more money.',
        options: [
          'Wait until 25 when you have more money',
          'Start investing now, even with just $1000',
          'Spend it on something fun instead',
          'Keep it in cash under your mattress'
        ],
        correctAnswer: 'Start investing now, even with just $1000',
        explanation: 'Time is your biggest advantage in investing. Starting at 17 gives you 8 more years of compound growth than waiting until 25. That extra time can mean thousands of dollars!',
        consequences: {
          'Wait until 25 when you have more money': 'You miss 8 years of potential growth - time you can never get back',
          'Start investing now, even with just $1000': 'Perfect! Time is your biggest advantage in building wealth',
          'Spend it on something fun instead': 'You enjoy now but miss a huge opportunity to build wealth',
          'Keep it in cash under your mattress': 'Your money loses value to inflation and earns nothing'
        },
        points: 100
      }
    ],
    totalPoints: 100
  }
];

export const respLessons = [
  {
    id: 'resp-1',
    title: 'RESP Basics: Your Education Fund',
    description: 'Learn how RESPs work and why they\'re amazing',
    content: `An RESP (Registered Education Savings Plan) is Canada's gift to students—a special savings account designed specifically for post-secondary education.

**What Makes RESPs Special?**
• Government Grants - Free money added to your savings!
• Tax-Free Growth - Investments grow without tax
• Flexible Use - University, college, trade school, apprenticeships
• Family Friendly - Parents, grandparents, anyone can contribute

**The Canadian Education Savings Grant (CESG):**
The government adds 20% to contributions:
• Contribute $100 → Government adds $20
• Contribute $2,500/year → Government adds $500
• Maximum lifetime grant: $7,200

**Who Can Open an RESP?**
• Parents for their children
• Grandparents for grandchildren
• Anyone for a beneficiary (even yourself!)

**No Contribution Limits:**
You can contribute as much as you want, but only the first $2,500 per year gets the 20% grant.

**The Bottom Line:**
RESPs turn your family's education savings into MORE education savings through free government money and tax-free investment growth. It's one of the best financial tools available to Canadian families!`,
    questions: [
      {
        id: 'r1-q1',
        type: 'multiple-choice' as const,
        question: 'What does RESP stand for?',
        options: [
          'Really Exciting Savings Plan',
          'Registered Education Savings Plan',
          'Reliable Education Support Program',
          'Registered Emergency Savings Plan'
        ],
        correctAnswer: 'Registered Education Savings Plan',
        explanation: 'RESP stands for Registered Education Savings Plan - it\'s a Canadian government program designed to help families save for post-secondary education.',
        points: 40
      },
      {
        id: 'r1-q2',
        type: 'scenario' as const,
        question: 'Your parents contribute $100/month to your RESP. What happens next?',
        scenario: 'Your parents have been putting $100 every month into your RESP account since you were born. You\'re now 16 and wondering what all this means.',
        options: [
          'The government adds nothing - it\'s just your parents\' money',
          'The government adds 20% on top as a grant!',
          'The money is locked away until you\'re 30',
          'You can use it for anything you want right now'
        ],
        correctAnswer: 'The government adds 20% on top as a grant!',
        explanation: 'The Canada Education Savings Grant (CESG) gives you 20% on contributions up to $2,500 per year. So if your parents put in $100, the government adds $20 - it\'s FREE money!',
        consequences: {
          'The government adds nothing - it\'s just your parents\' money': 'You\'re missing out on understanding the amazing government grants',
          'The government adds 20% on top as a grant!': 'Exactly! The CESG makes RESPs incredibly powerful - free money from the government',
          'The money is locked away until you\'re 30': 'Not quite - you can access it for education starting at any age',
          'You can use it for anything you want right now': 'The money is specifically for education, but that\'s what makes the grants possible'
        },
        points: 80
      },
      {
        id: 'r1-q3',
        type: 'true-false' as const,
        question: 'You can only use RESP money for university, not college or trade school.',
        correctAnswer: 'False',
        explanation: 'RESPs can be used for ANY qualifying post-secondary education - university, college, trade schools, apprenticeships, and even some international programs. It\'s very flexible!',
        points: 50
      }
    ],
    totalPoints: 170
  },
  {
    id: 'resp-2',
    title: 'RESP Grants: Free Money from Government',
    description: 'Maximize your government benefits',
    content: `The government of Canada wants to help families save for education—so much that they're willing to give you FREE money through grants!

**Canada Education Savings Grant (CESG):**
• Basic rate: 20% on first $2,500/year
• Maximum per year: $500
• Lifetime maximum: $7,200
• Available until age 17

**Additional CESG (for lower-income families):**
• Extra 10-20% on first $500 contributed
• Helps families who need it most

**Canada Learning Bond (CLB):**
• For families with lower incomes
• $500 when you open an RESP
• $100 per year until age 15
• Up to $2,000 total
• NO contributions required!

**Provincial Grants (varies by province):**
• British Columbia: $1,200 one-time grant
• Quebec: QESI grants matching contributions
• Saskatchewan: Up to $500/year grant

**The Power of Grants:**
Imagine: Your family contributes $2,500/year
• Family contribution: $2,500
• CESG grant: $500 (20%)
• Total saved that year: $3,000
That's like getting a 20% return before any investment growth!

**Key Insight:**
These grants are essentially FREE MONEY. Not applying for them is like leaving thousands of dollars on the table. Make sure your family is maximizing all available grants!`,
    questions: [
      {
        id: 'r2-q1',
        type: 'multiple-choice' as const,
        question: 'What\'s the maximum CESG grant you can get per year?',
        options: [
          '$300 per year',
          '$500 per year',
          '$600 per year',
          '$1,000 per year'
        ],
        correctAnswer: '$500 per year',
        explanation: 'The maximum Canada Education Savings Grant is $500 per year (20% of $2,500 in contributions). Over 18 years, that\'s up to $7,200 in free money!',
        points: 60
      },
      {
        id: 'r2-q2',
        type: 'scenario' as const,
        question: 'Your family income is lower than average. Are there extra RESP benefits?',
        scenario: 'Your family income is $45,000 per year, which is below the Canadian average. You\'re wondering if this affects your RESP benefits.',
        options: [
          'No difference - everyone gets the same grants',
          'Lower income families get extra grants and bonds',
          'Lower income families get less money',
          'Only wealthy families can have RESPs'
        ],
        correctAnswer: 'Lower income families get extra grants and bonds',
        explanation: 'Families with lower incomes get EXTRA benefits! The Additional CESG gives up to 10% extra on the first $500 contributed, plus the Canada Learning Bond can add $2,000 over time with no contributions required!',
        consequences: {
          'No difference - everyone gets the same grants': 'Actually, Canada provides extra support for lower-income families',
          'Lower income families get extra grants and bonds': 'Exactly! Canada wants to ensure all students can afford education regardless of income',
          'Lower income families get less money': 'It\'s the opposite - Canada provides MORE support for families who need it',
          'Only wealthy families can have RESPs': 'RESPs are for everyone, and lower-income families get the most government support'
        },
        points: 90
      },
      {
        id: 'r2-q3',
        type: 'multiple-choice' as const,
        question: 'If you don\'t use your RESP for education, what happens to the government grants?',
        options: [
          'You keep all the grant money',
          'The grants go back to the government',
          'You pay taxes on the grants',
          'The grants transfer to your parents'
        ],
        correctAnswer: 'The grants go back to the government',
        explanation: 'If the RESP isn\'t used for qualifying education, the government grants (CESG, CLB, etc.) must be returned. However, your family keeps all the original contributions plus any investment growth on those contributions.',
        points: 70
      }
    ],
    totalPoints: 220
  },
  {
    id: 'resp-3',
    title: 'Using Your RESP: Education Expenses',
    description: 'Learn what you can pay for with RESP funds',
    content: `You've saved all this money in your RESP—now what can you actually use it for? Great news: RESPs are incredibly flexible!

**Qualifying Programs:**
• Universities (all programs)
• Colleges (diplomas, certificates)
• Trade schools and apprenticeships
• CEGEP (Quebec)
• Some international programs
• Online accredited programs

**What RESPs Can Pay For:**
✅ Tuition and fees
✅ Textbooks and course materials
✅ Required equipment (laptop, tools, uniform)
✅ Residence/housing costs
✅ Meal plans
✅ Living expenses while studying full-time
✅ Transportation

**How Withdrawals Work:**
There are two types of withdrawals:

1. **PSE (Post-Secondary Education) Withdrawals**
   • Original contributions come back tax-free
   • Can withdraw anytime
   
2. **EAP (Educational Assistance Payment)**
   • Investment growth + grants
   • Taxed in student's hands (usually low/no tax)
   • Must be enrolled in qualifying program

**Timing:**
• Withdraw as needed throughout your studies
• No rush to take it all at once
• Strategic: Spread over multiple years to minimize taxes

**What If You Don't Go to School?**
• Contributions can be withdrawn tax-free
• Grants go back to government
• Growth can be transferred to RRSP or withdrawn (with penalties)
• Can transfer to a sibling's RESP

**Pro Tips:**
• Keep receipts for education expenses
• Withdraw strategically to minimize taxes
• Coordinate with part-time work income
• Consider taking more in years with lower income

**The Bottom Line:**
RESPs give you financial freedom to focus on your education instead of stressing about money. The flexibility means almost any post-secondary path is covered!`,
    questions: [
      {
        id: 'r3-q1',
        type: 'scenario' as const,
        question: 'You\'re starting college and need to pay various expenses. Which can you use RESP money for?',
        scenario: 'You\'re enrolled in a 2-year Animation program at Sheridan College. You need to pay tuition ($3,500), buy a laptop ($1,200), pay residence fees ($8,000), and buy textbooks ($400).',
        options: [
          'Only tuition costs',
          'Tuition and textbooks only',
          'All of these expenses',
          'None - RESPs are only for universities'
        ],
        correctAnswer: 'All of these expenses',
        explanation: 'RESPs can pay for tuition, books, supplies, equipment, residence, and even living expenses while you\'re a full-time student. And yes, college programs like Animation definitely qualify!',
        consequences: {
          'Only tuition costs': 'RESPs are much more flexible than that - they cover most education-related expenses',
          'Tuition and textbooks only': 'Close, but RESPs also cover residence, supplies, and living expenses',
          'All of these expenses': 'Perfect! RESPs are designed to cover the full cost of post-secondary education',
          'None - RESPs are only for universities': 'College programs absolutely qualify - RESPs support all types of post-secondary education'
        },
        points: 85
      },
      {
        id: 'r3-q2',
        type: 'true-false' as const,
        question: 'You must spend all RESP money in the first year of school.',
        correctAnswer: 'False',
        explanation: 'You can withdraw RESP funds throughout your entire education journey. Many students spread withdrawals over multiple years to match their actual expenses and manage taxes effectively.',
        points: 45
      },
      {
        id: 'r3-q3',
        type: 'multiple-choice' as const,
        question: 'Who pays taxes on RESP withdrawals?',
        options: [
          'Your parents pay all the taxes',
          'The government pays the taxes',
          'You (the student) pay taxes on the growth portion',
          'No one pays taxes on RESP money'
        ],
        correctAnswer: 'You (the student) pay taxes on the growth portion',
        explanation: 'The student pays income tax on the investment growth and government grants portion (called EAP - Educational Assistance Payment). Since most students have low income, they often pay little to no tax. Original contributions come back tax-free.',
        points: 75
      }
    ],
    totalPoints: 205
  }
];

// Combined modules for streamlined learning experience
export const budgetingAndSavingLessons = [...budgetingLessons, ...savingsLessons];
export const borrowingAndInvestingLessons = [...creditLessons, ...investmentLessons];

export const allLessons = {
  'resp': respLessons,
  'budgetingAndSaving': budgetingAndSavingLessons,
  'borrowingAndInvesting': borrowingAndInvestingLessons
};