// クイズデータ
const quizData = [
    {
        question: "私の出身地はどこでしょう？",
        options: [
            { text: "東京", correct: false },
            { text: "大阪", correct: false },
            { text: "福岡", correct: true }
        ],
        explanation: "正解！福岡県出身です。美味しいラーメンと明太子が自慢の街です。",
        wrongMessage: "残念！福岡県出身です。博多ラーメンが有名ですね。"
    },
    {
        question: "私が最初に学んだプログラミング言語は？",
        options: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: false },
            { text: "C言語", correct: true }
        ],
        explanation: "その通り！大学でC言語からプログラミングを学び始めました。",
        wrongMessage: "不正解です。実はC言語から始めました。ポインタで苦戦した記憶があります。"
    },
    {
        question: "私の趣味は次のうちどれ？",
        options: [
            { text: "写真撮影", correct: true },
            { text: "釣り", correct: false },
            { text: "料理", correct: false }
        ],
        explanation: "正解です！風景写真を撮るのが大好きで、週末はよくカメラを持って出かけます。",
        wrongMessage: "残念！私の趣味は写真撮影です。特に自然風景を撮るのが好きです。"
    }
];

// プロフィールデータ（全問正解後に表示）
const profileContent = `
    <div class="profile-card">
        <h2>私について</h2>
        <div class="profile-details">
            <p><strong>名前:</strong> 田中 太郎</p>
            <p><strong>専門:</strong> フロントエンド開発</p>
            <p><strong>好きな技術:</strong> React, Three.js, CSSアニメーション</p>
            <p><strong>趣味:</strong> 写真撮影、旅行、新しい技術の勉強</p>
        </div>
    </div>
`;