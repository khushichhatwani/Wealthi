import { checkBudgetAlerts, generateMonthlyReports, processRecurringTransaction, triggerRecurringTransactions } from "@/lib/inngest/functions";
import { inngest } from "@/lib/inngest/client";
import {serve} from "inngest/next";

export const {GET, POST, PUT} = serve({
    client:inngest,
    functions:[
     checkBudgetAlerts,
     triggerRecurringTransactions,
     processRecurringTransaction,
     generateMonthlyReports
    ],
})