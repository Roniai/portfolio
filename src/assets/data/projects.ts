import { LABELS_STACKS } from "@/constants/stack-label";
import {
  AndroidSvg,
  AngularSvg,
  BootStrapSvg,
  ExpoSvg,
  FirebaseSvg,
  JQuerySvg,
  JavaScriptSvg,
  JavaSvg,
  MySqlSvg,
  NestJsSvg,
  NextJsSvg,
  PhpSvg,
  PostgresqlSvg,
  PrismaSvg,
  QuarkusSvg,
  ReactSvg,
  RestApiSvg,
  SpringBootSvg,
  SymfonySvg,
  TailwindCssSvg,
  TypeScriptSvg,
} from "../icons";
import { getPathImageNamesRank } from "@/lib/utils";
import { SvgProps } from "@/lib/types";

type TProject = {
  title: string;
  imagePath: string;
  imagePaths: string[];
  stacks: React.FC<SvgProps>[];
  stacksLabels: string[];
  demoTargetId?: string;
  version?: string;
  releasedAt?: string;
};

export const projectsData: TProject[] = [
  {
    title: "Hope Lyrics",
    imagePath: "/pj-hope.jpg",
    imagePaths: getPathImageNamesRank("pj-hope", "png", 8),
    demoTargetId: "demo",
    version: "2.0.0",
    releasedAt: "2026-08",
    stacks: [
      ReactSvg,
      ExpoSvg,
      TypeScriptSvg,
      NextJsSvg,
      PrismaSvg,
      PostgresqlSvg,
    ],
    stacksLabels: [
      LABELS_STACKS.REACT_NATIVE,
      LABELS_STACKS.EXPO,
      LABELS_STACKS.CONTEXT,
      LABELS_STACKS.TYPESCRIPT,
      LABELS_STACKS.NEXT_JS,
      LABELS_STACKS.PRISMA,
      LABELS_STACKS.POSTGRE_SQL,
    ],
  },
  {
    title: "AZ+",
    imagePath: "/pj-azplus.jpeg",
    imagePaths: getPathImageNamesRank("pj-azplus", "jpg", 6),
    stacks: [
      ReactSvg,
      NestJsSvg,
      TypeScriptSvg,
      RestApiSvg,
      FirebaseSvg,
      PostgresqlSvg,
    ],
    stacksLabels: [
      LABELS_STACKS.REACT_NATIVE,
      LABELS_STACKS.ANDROID,
      LABELS_STACKS.IOS,
      LABELS_STACKS.CONTEXT,
      LABELS_STACKS.RECOIL,
      LABELS_STACKS.TYPESCRIPT,
      LABELS_STACKS.FIGMA,
      LABELS_STACKS.NEST_JS,
      LABELS_STACKS.REST_API,
      LABELS_STACKS.PRISMA,
      LABELS_STACKS.FIREBASE,
      LABELS_STACKS.MAPS,
      LABELS_STACKS.JWT,
      LABELS_STACKS.POSTGRE_SQL,
      LABELS_STACKS.AGILE,
      LABELS_STACKS.JIRA,
    ],
  },
  // TODO(CalypsHOME): project hidden — client mission covered by the IROK / Genius At Work
  // confidentiality clause (art. 12: no disclosure without prior written consent).
  // Restore only once written consent is obtained or the mission is over:
  // 1. Uncomment the block below (keep it at this position, after AZ+).
  // 2. Re-insert its texts at index 2 of ProjectsPage.projectsDescription and
  //    ProjectsPage.projectsDetails in messages/fr.json and messages/en.json
  //    (original texts: `git show bb792be:messages/fr.json`, same for en.json).
  // 3. Re-import ReduxSvg and WebSocketSvg from "../icons".
  // Images are kept in public/pj-calypshome*.jpg.
  // {
  //   title: "CalypsHOME",
  //   imagePath: "/pj-calypshome.jpg",
  //   imagePaths: getPathImageNamesRank("pj-calypshome", "jpg", 9),
  //   stacks: [
  //     ReactSvg,
  //     JavaScriptSvg,
  //     ReduxSvg,
  //     WebSocketSvg,
  //     RestApiSvg,
  //     FirebaseSvg,
  //   ],
  //   stacksLabels: [
  //     LABELS_STACKS.REACT_NATIVE,
  //     LABELS_STACKS.ANDROID,
  //     LABELS_STACKS.IOS,
  //     LABELS_STACKS.REDUX,
  //     LABELS_STACKS.JAVASCRIPT,
  //     LABELS_STACKS.FIGMA,
  //     LABELS_STACKS.REST_API,
  //     LABELS_STACKS.FIREBASE,
  //     LABELS_STACKS.I18N,
  //     LABELS_STACKS.WEB_SOCKET,
  //     LABELS_STACKS.APP_STORE,
  //     LABELS_STACKS.PLAY_STORE,
  //     LABELS_STACKS.AGILE,
  //     LABELS_STACKS.JIRA,
  //   ],
  // },
  {
    title: "MMRS Ivato",
    imagePath: "/pj-ivato.jpg",
    imagePaths: [
      "/pj-ivato.jpg",
      ...getPathImageNamesRank("pj-ivato", "jpg", 4),
    ],
    stacks: [PhpSvg, JQuerySvg, BootStrapSvg, TailwindCssSvg, MySqlSvg],
    stacksLabels: [
      LABELS_STACKS.PHP,
      LABELS_STACKS.PHP_WORD,
      LABELS_STACKS.PHP_QR,
      LABELS_STACKS.FPDF,
      LABELS_STACKS.JQUERY,
      LABELS_STACKS.BOOTSTRAP,
      LABELS_STACKS.TAILWIND_CSS,
      LABELS_STACKS.MYSQL,
    ],
  },
  {
    title: "Offer mgmt",
    imagePath: "/pj-om.jpg",
    imagePaths: ["/pj-om.jpg", ...getPathImageNamesRank("pj-om", "jpg", 3)],
    stacks: [
      AngularSvg,
      JavaScriptSvg,
      QuarkusSvg,
      JavaSvg,
      RestApiSvg,
      MySqlSvg,
    ],
    stacksLabels: [
      LABELS_STACKS.ANGULAR,
      LABELS_STACKS.JAVASCRIPT,
      LABELS_STACKS.QUARKUS,
      LABELS_STACKS.JAVA,
      LABELS_STACKS.REST_API,
      LABELS_STACKS.MYSQL,
    ],
  },
  {
    title: "MethPay",
    imagePath: "/pj-boa.jpg",
    imagePaths: ["/pj-boa.jpg", ...getPathImageNamesRank("pj-boa", "jpg", 4)],
    stacks: [PhpSvg, JQuerySvg, BootStrapSvg, MySqlSvg],
    stacksLabels: [
      LABELS_STACKS.PHP,
      LABELS_STACKS.PHP_EXCEL,
      LABELS_STACKS.FPDF,
      LABELS_STACKS.JQUERY,
      LABELS_STACKS.BOOTSTRAP,
      LABELS_STACKS.MYSQL,
    ],
  },
  {
    title: "Portfolio",
    imagePath: "/pj-portfolio.jpg",
    imagePaths: [
      "/pj-portfolio.jpg",
      ...getPathImageNamesRank("pj-portfolio", "jpg", 5),
    ],
    stacks: [NextJsSvg, ReactSvg, TailwindCssSvg, TypeScriptSvg],
    stacksLabels: [
      LABELS_STACKS.NEXT_JS,
      LABELS_STACKS.REACT,
      LABELS_STACKS.TAILWIND_CSS,
      LABELS_STACKS.SHADCN,
      LABELS_STACKS.TYPESCRIPT,
    ],
  },
  {
    title: "Salario",
    imagePath: "/pj-salario.jpg",
    imagePaths: getPathImageNamesRank("pj-salario", "png", 2),
    stacks: [
      ReactSvg,
      TypeScriptSvg,
      SpringBootSvg,
      JavaSvg,
      RestApiSvg,
      PostgresqlSvg,
    ],
    stacksLabels: [
      LABELS_STACKS.REACT_NATIVE,
      LABELS_STACKS.EXPO,
      LABELS_STACKS.ANDROID,
      LABELS_STACKS.TYPESCRIPT,
      LABELS_STACKS.SPRING_BOOT,
      LABELS_STACKS.JAVA,
      LABELS_STACKS.REST_API,
      LABELS_STACKS.POSTGRE_SQL,
    ],
  },
  {
    title: "Ges Biblio",
    imagePath: "/pj-gesbiblio.jpg",
    imagePaths: getPathImageNamesRank("pj-gesbiblio", "jpg", 4),
    stacks: [AndroidSvg, JavaSvg, SymfonySvg, PhpSvg, RestApiSvg, MySqlSvg],
    stacksLabels: [
      LABELS_STACKS.ANDROID,
      LABELS_STACKS.JAVA,
      LABELS_STACKS.SYMFONY,
      LABELS_STACKS.PHP,
      LABELS_STACKS.REST_API,
      LABELS_STACKS.MYSQL,
    ],
  },
];
