export type GetPointsAuthParams = {
    initData: string;
    refParent?: string;
};

export type PointsAuthResponse = {
    refHash: string;
    tapTap: number;
    referral: number;
    telegramChannel: number;
    xChannel: number;
    // All partner tasks are located here
    torchFinance?: Record<string, number>;
};
