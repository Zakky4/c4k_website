import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import Contact from "components/contact";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Accordion from "components/accordion";
import Image from "next/legacy/image";
import eyecatch from "images/about.jpg";
// サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteUrl } = siteMeta;

// ベースのメタデータ
import { openGraphMetadata, twitterMetadata } from "lib/baseMetadata";

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" />

      <figure>
        {/* <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        /> */}
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              code4kaizenは、業務改善のスペシャリストです。プログラミングやSaaSなど、多様な技術を巧みに組み合わせ、業務効率化の革新的なソリューションを提供し続けています。私たちの目指すところは、クライアントの生産性を飛躍的に向上させることです。
            </p>

            <h2>目指していること</h2>
            <p>
              業務改善においては、データ解析からクリエイティブな提案まで幅広く対応しています。常に新しいアイデアを取り入れ、顧客に最適なソリューションを提供することを目標としています。多くのプロジェクトを手がける中で、特に細部にこだわった業務改善に力を注いでいます。
            </p>
            <p>
              単に結果を出すだけでなく、その過程や理由を大切にしながら業務改善を行っています。毎回課題解決をテーマに掲げ、業務に真摯に向き合い、フィードバックを活かすことで、お客様のニーズに応える最適な答えを導き出しています。
            </p>

            <h2>新しいことへのチャレンジ</h2>
            <p>
              これまでにないものを開発することで、愛着が生まれてきます。興味を持ったことは小さなことでも積極的に取り入れ、より良いものを作るように心がけています。小さなヒントから新しいものを生み出すような開発を、これからも続けていきたいと考えています。
            </p>

            <h2>自己紹介</h2>
            <Accordion heading="経歴">
              <p>
                20年以上のIT業界経験を持ち、WEB開発、インフラ構築、ディレクション、プロジェクトマネジメントといった分野で技術を磨いてきました。
                <br />
                Web制作と開発における最適化とセキュリティを重視した実装能力を持ち、外部サービスとの連携を通じて業務効率化ソリューションを提供してきました。
                <br />
                プロジェクトマネジメントの分野では、戦略的なアプローチでプロジェクトを成功に導いています。
                <br />
                また、新しい分野（特にNext.jsとChatGPT）の吸収に取り組んでおり、自己学習を通じて最新技術を常に取り入れることに努めています。
                <br />
                この技術力と経験を活かし、顧客の業務課題解決に貢献したいと思います。
              </p>
            </Accordion>
            <Accordion heading="制作スキル">
              <p>
              HTML / CSS / JavaScript / GAS / PHP / Python / Shopify / Liquid  / LINE公式 / Lステップ
              </p>
            </Accordion>
            <Accordion heading="ツール">
              <p>
              GitHub / Notion / Canva / Figma / Google Workspace / Zendesk
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

// メタデータ
const pageTitle = "アバウト";
const pageDesc = "About development activities";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/about", siteUrl).toString();

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
    images: [
      {
        url: eyecatch.src,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    ],
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
    images: [eyecatch.src],
  },
};
