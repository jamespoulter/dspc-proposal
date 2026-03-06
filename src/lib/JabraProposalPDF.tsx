import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Branding colors - formal SOW palette
const colors = {
  orange: "#f46c42",
  nearBlack: "#1a1a1a",
  darkGrey: "#2d2d2d",
  bodyText: "#333333",
  mutedText: "#555555",
  captionText: "#888888",
  lightGrey: "#f5f5f5",
  tableAlt: "#fafafa",
  tableBorder: "#dddddd",
  goldHighlight: "#fff5f0",
  rule: "#eeeeee",
};

// Styles
const styles = StyleSheet.create({
  // Base page
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.bodyText,
    lineHeight: 1.5,
  },
  // Cover page
  coverPage: {
    backgroundColor: "#ffffff",
    padding: 50,
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  coverTopRule: {
    width: "100%",
    height: 2,
    backgroundColor: colors.orange,
    marginBottom: 20,
  },
  coverLogo: {
    flexDirection: "row",
    marginBottom: 80,
  },
  coverLogoThreePoint: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
  },
  coverLogoLabs: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.mutedText,
  },
  coverContent: {
    flex: 1,
    justifyContent: "center",
  },
  coverLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    letterSpacing: 2,
    marginBottom: 12,
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: colors.nearBlack,
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 14,
    color: colors.mutedText,
    marginBottom: 40,
  },
  coverMeta: {
    fontSize: 11,
    color: colors.bodyText,
    marginBottom: 6,
  },
  coverBottomRule: {
    width: "100%",
    height: 2,
    backgroundColor: colors.orange,
    marginTop: "auto",
    marginBottom: 12,
  },
  coverFooter: {
    fontSize: 8,
    color: colors.captionText,
    textAlign: "center",
  },
  // Header & Footer
  header: {
    position: "absolute",
    top: 25,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: colors.captionText,
  },
  footer: {
    position: "absolute",
    bottom: 25,
    left: 50,
    right: 50,
    alignItems: "center",
  },
  footerPageNumber: {
    fontSize: 9,
    color: colors.bodyText,
    marginBottom: 4,
  },
  footerCompany: {
    fontSize: 7,
    color: colors.captionText,
  },
  // Typography
  sectionHeading: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.orange,
    marginBottom: 12,
    marginTop: 4,
  },
  subHeading: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.darkGrey,
    marginBottom: 8,
    marginTop: 16,
  },
  body: {
    fontSize: 10,
    color: colors.bodyText,
    lineHeight: 1.5,
    marginBottom: 12,
  },
  caption: {
    fontSize: 8,
    color: colors.captionText,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  // Lists
  numberedItem: {
    flexDirection: "row",
    marginBottom: 6,
  },
  numberedNumber: {
    width: 16,
    fontSize: 10,
    color: colors.bodyText,
  },
  numberedText: {
    flex: 1,
    fontSize: 10,
    color: colors.bodyText,
    lineHeight: 1.5,
  },
  // Tables
  table: {
    marginTop: 12,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: colors.tableBorder,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.tableBorder,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.nearBlack,
    padding: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.tableBorder,
  },
  tableRowAlt: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.tableBorder,
    backgroundColor: colors.tableAlt,
  },
  tableCell: {
    fontSize: 9,
    color: colors.bodyText,
    padding: 8,
  },
  tableCellBold: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.nearBlack,
    padding: 8,
  },
  // Dividers
  sectionRule: {
    width: "100%",
    height: 0.5,
    backgroundColor: colors.rule,
    marginVertical: 20,
  },
  // Special
  convenerBlock: {
    marginBottom: 16,
  },
  convenerName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.bodyText,
    marginBottom: 4,
  },
  convenerBio: {
    fontSize: 10,
    color: colors.bodyText,
    lineHeight: 1.5,
  },
  bottomRule: {
    width: "100%",
    height: 1,
    backgroundColor: colors.orange,
    marginTop: 20,
    marginBottom: 8,
  },
  bottomText: {
    fontSize: 8,
    color: colors.captionText,
    textAlign: "center",
  },
});

// Header component
const PageHeader = () => (
  <View style={styles.header} fixed>
    <Text>ThreePoint Labs | Commercial in Confidence</Text>
    <Text>March 2026</Text>
  </View>
);

// Footer component
const PageFooter = ({ pageNumber }: { pageNumber: number }) => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerPageNumber}>{pageNumber}</Text>
    <Text style={styles.footerCompany}>
      ThreePoint Labs Limited | Company No. 11734247 | threepoint.io
    </Text>
  </View>
);

// Cover Page
const CoverPage = () => (
  <Page size="A4" style={styles.coverPage}>
    <View style={styles.coverTopRule} />
    <View style={styles.coverLogo}>
      <Text style={styles.coverLogoThreePoint}>ThreePoint</Text>
      <Text style={styles.coverLogoLabs}>Labs</Text>
    </View>
    <View style={styles.coverContent}>
      <Text style={styles.coverLabel}>COMMERCIAL PROPOSAL</Text>
      <Text style={styles.coverTitle}>Voice AI Research Programme</Text>
      <Text style={styles.coverSubtitle}>A Strategic Research Partnership</Text>
      <Text style={styles.coverMeta}>Prepared for: Jabra / GN Group</Text>
      <Text style={styles.coverMeta}>Prepared by: ThreePoint Labs Limited</Text>
      <Text style={styles.coverMeta}>Date: March 2026</Text>
      <Text style={styles.coverMeta}>Version: 1.0 — Confidential</Text>
    </View>
    <View style={styles.coverBottomRule} />
    <Text style={styles.coverFooter}>
      ThreePoint Labs Limited | Registered in England & Wales | Company No. 11734247
    </Text>
  </Page>
);

// Page 2 - Executive Summary
const ExecutiveSummaryPage = () => (
  <Page size="A4" style={styles.page}>
    <PageHeader />
    <Text style={styles.sectionHeading}>1. Executive Summary</Text>
    <Text style={styles.body}>
      ThreePoint Labs proposes a structured Voice AI Research Programme for Jabra, designed to establish Jabra as the authoritative voice in the enterprise voice AI conversation. Delivered over 3–12 months depending on tier, the programme combines independent market research, a curated expert panel, and high-profile convened events to produce proprietary data, thought leadership content, and sustained media coverage.
    </Text>
    <Text style={styles.body}>
      This document sets out the programme scope, deliverables, timeline, investment levels, and terms of engagement.
    </Text>

    <Text style={styles.subHeading}>1.1 Programme Objectives</Text>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>1.</Text>
      <Text style={styles.numberedText}>Establish Jabra as the leading voice in enterprise Voice AI research</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>2.</Text>
      <Text style={styles.numberedText}>Generate proprietary data and benchmarks owned by Jabra</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>3.</Text>
      <Text style={styles.numberedText}>Build sustained thought leadership through expert panel and published research</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>4.</Text>
      <Text style={styles.numberedText}>Create media-ready content for enterprise and technology press</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>5.</Text>
      <Text style={styles.numberedText}>Differentiate Jabra from hardware-only competitors entering the AI space</Text>
    </View>

    <Text style={styles.subHeading}>1.2 Programme Convener</Text>
    <Text style={styles.body}>
      The programme is convened and chaired by James Poulter, Founder of ThreePoint Labs and one of the UK's most sought-after AI strategists. James is the author of AI @ Work (Bloomsbury, August 2026), has delivered 250+ keynotes globally, and holds fractional Head of AI positions at Elvis London and Dunham & Company. He has previously led AI transformation programmes for Amazon, Verizon, LEGO, Bosch, Bloomsbury, and Universal Music.
    </Text>
    <PageFooter pageNumber={2} />
  </Page>
);

// Page 3 - Programme Scope
const ProgrammeScopePage = () => (
  <Page size="A4" style={styles.page}>
    <PageHeader />
    <Text style={styles.sectionHeading}>2. Programme Scope & Deliverables</Text>
    <Text style={styles.body}>
      The programme is structured in three phases across three investment tiers. All tiers include the core research framework; higher tiers extend geographic reach, add convened events, and deepen the output cadence.
    </Text>

    <Text style={styles.subHeading}>2.1 Research Framework</Text>
    <Text style={styles.body}>
      All tiers are built on ThreePoint's proprietary Voice AI @ Work research methodology, combining: quantitative survey research (enterprise decision-makers), qualitative expert interviews (panel members + senior practitioners), competitive landscape analysis, and media sentiment tracking.
    </Text>

    <Text style={styles.subHeading}>2.2 Deliverables by Tier</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "40%" }]}>Deliverable</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Bronze</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Silver</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Gold</Text>
      </View>
      {[
        ["Baseline Research Report", "✓", "✓", "✓"],
        ["Markets Covered", "1", "2", "5"],
        ["Expert Panel Sessions", "2", "4", "6"],
        ["Quarterly Research Updates", "—", "—", "✓"],
        ["Copenhagen Workshop", "—", "✓", "✓"],
        ["New York Summit", "—", "—", "✓"],
        ["Jabra Voice AI Index", "—", "—", "✓"],
        ["Interim Research Report", "—", "✓", "✓"],
        ["Annual Report (full)", "—", "✓", "✓"],
        ["Media Amplification Programme", "—", "—", "✓"],
        ["Executive Briefing Series", "—", "—", "✓"],
        ["Whitepaper Content Programme", "—", "✓", "✓"],
      ].map((row, i) => (
        <View key={i} style={i % 2 === 0 ? styles.tableRow : styles.tableRowAlt}>
          <Text style={[styles.tableCell, { width: "40%" }]}>{row[0]}</Text>
          <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>{row[1]}</Text>
          <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>{row[2]}</Text>
          <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>{row[3]}</Text>
        </View>
      ))}
    </View>

    <Text style={styles.subHeading}>2.3 Programme Phases (Gold / Full Programme)</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "30%" }]}>Phase</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%" }]}>Period</Text>
        <Text style={[styles.tableHeaderCell, { width: "50%" }]}>Key Activities</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "30%" }]}>Phase 1: Foundation</Text>
        <Text style={[styles.tableCell, { width: "20%" }]}>Months 1–3</Text>
        <Text style={[styles.tableCell, { width: "50%" }]}>Panel assembly, research design, baseline data collection, interim scoping report</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCell, { width: "30%" }]}>Phase 2: Deep Research</Text>
        <Text style={[styles.tableCell, { width: "20%" }]}>Months 4–8</Text>
        <Text style={[styles.tableCell, { width: "50%" }]}>Global survey (5 markets), expert interviews, Copenhagen Workshop, interim report publication</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "30%" }]}>Phase 3: Synthesis & Launch</Text>
        <Text style={[styles.tableCell, { width: "20%" }]}>Months 9–12</Text>
        <Text style={[styles.tableCell, { width: "50%" }]}>Final analysis, New York Summit, annual report, Jabra Voice AI Index launch, media rollout</Text>
      </View>
    </View>
    <PageFooter pageNumber={3} />
  </Page>
);

// Page 4 - Expert Panel
const ExpertPanelPage = () => (
  <Page size="A4" style={styles.page}>
    <PageHeader />
    <Text style={styles.sectionHeading}>3. Expert Panel</Text>
    <Text style={styles.body}>
      The programme is supported by a panel of five globally recognised Voice AI experts, selected for their combination of research credibility, industry influence, and geographic reach. Panel members contribute to research design, expert interviews, and convened workshop sessions.
    </Text>

    <Text style={styles.subHeading}>3.1 Programme Convener & Chair</Text>
    <View style={styles.convenerBlock}>
      <Text style={styles.convenerName}>James Poulter — Founder, ThreePoint Labs</Text>
      <Text style={styles.convenerBio}>
        AI strategist, keynote speaker, and author. Former Head of Emerging Platforms, The LEGO Group; CEO, Vixen Labs (exited to House 337, 2023). Author of AI @ Work (Bloomsbury, 2026). Fractional Head of AI, Elvis London and Dunham & Company.
      </Text>
    </View>

    <Text style={styles.subHeading}>3.2 Panel Members</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "20%" }]}>Name</Text>
        <Text style={[styles.tableHeaderCell, { width: "55%" }]}>Role & Credentials</Text>
        <Text style={[styles.tableHeaderCell, { width: "25%" }]}>Region</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCellBold, { width: "20%" }]}>Saba Akhtar</Text>
        <Text style={[styles.tableCell, { width: "55%" }]}>Conversational AI & Voice UX Expert. Certified conversational designer; Founder, Women in Voice Germany</Text>
        <Text style={[styles.tableCell, { width: "25%" }]}>Europe</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCellBold, { width: "20%" }]}>Pete Erickson</Text>
        <Text style={[styles.tableCell, { width: "55%" }]}>Founder, VOICE Summit — the world's premier voice technology conference. Director, Tech Ecosystem Institute</Text>
        <Text style={[styles.tableCell, { width: "25%" }]}>United States</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCellBold, { width: "20%" }]}>Noelle Russell</Text>
        <Text style={[styles.tableCell, { width: "55%" }]}>Global AI Solutions Lead, Accenture. Led AI teams at Microsoft, Amazon Alexa, AWS, IBM, NPR. Founder, WomenIn.AI</Text>
        <Text style={[styles.tableCell, { width: "25%" }]}>United States</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCellBold, { width: "20%" }]}>Susan Westwater</Text>
        <Text style={[styles.tableCell, { width: "55%" }]}>Co-author, Voice Strategy (Amazon #1, 2019) and Voice Marketing (2023). Advises global enterprise brands on voice AI strategy</Text>
        <Text style={[styles.tableCell, { width: "25%" }]}>United States</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCellBold, { width: "20%" }]}>Prof. Toby Walsh</Text>
        <Text style={[styles.tableCell, { width: "55%" }]}>Professor of AI, UNSW Sydney. Author of multiple AI books including 2062: The World That AI Made. Advisor to governments and enterprises globally</Text>
        <Text style={[styles.tableCell, { width: "25%" }]}>Australia / APAC</Text>
      </View>
    </View>
    <PageFooter pageNumber={4} />
  </Page>
);

// Page 5 - Investment
const InvestmentPage = () => (
  <Page size="A4" style={styles.page}>
    <PageHeader />
    <Text style={styles.sectionHeading}>4. Investment</Text>
    <Text style={styles.body}>
      Three investment tiers are available, designed to match budget appetite and strategic ambition. All prices are exclusive of VAT.
    </Text>

    <Text style={styles.subHeading}>4.1 Tier Overview</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "25%" }]}></Text>
        <Text style={[styles.tableHeaderCell, { width: "25%", textAlign: "center" }]}>Bronze — Foundation</Text>
        <Text style={[styles.tableHeaderCell, { width: "25%", textAlign: "center" }]}>Silver — Growth</Text>
        <Text style={[styles.tableHeaderCell, { width: "25%", textAlign: "center", backgroundColor: colors.goldHighlight }]}>Gold — Full Programme{"\n"}(Recommended)</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCellBold, { width: "25%" }]}>Investment</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>From £87,000</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>From £200,000</Text>
        <Text style={[styles.tableCellBold, { width: "25%", textAlign: "center", backgroundColor: colors.goldHighlight }]}>From £335,000</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCellBold, { width: "25%" }]}>Duration</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>3 months</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>12 months</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center", backgroundColor: colors.goldHighlight }]}>12 months</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCellBold, { width: "25%" }]}>Markets</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>1</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>2</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center", backgroundColor: colors.goldHighlight }]}>5</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCellBold, { width: "25%" }]}>Recommended for</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>Initial proof of concept</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center" }]}>Established research programme</Text>
        <Text style={[styles.tableCell, { width: "25%", textAlign: "center", backgroundColor: colors.goldHighlight }]}>Full market leadership play</Text>
      </View>
    </View>
    <Text style={[styles.caption, { marginTop: 4 }]}>
      Research partner costs (shown separately) are subject to supplier brief. See Section 4.3.
    </Text>

    <Text style={styles.subHeading}>4.2 Programme Fee Breakdown</Text>
    <Text style={[styles.caption, { marginBottom: 4, marginTop: 0 }]}>Core Programme Fees (Fixed)</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "40%" }]}>Item</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Bronze</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Silver</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Gold</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Programme Management & Direction</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£48,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£108,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£168,000</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Panel Coordination</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£10,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£20,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£30,000</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Event Production</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>—</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£18,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£42,000</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Research, Reporting & Content</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£14,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£24,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£28,000</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Jabra Voice AI Index</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>—</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>—</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£12,000</Text>
      </View>
      <View style={[styles.tableRow, { backgroundColor: colors.lightGrey }]}>
        <Text style={[styles.tableCellBold, { width: "40%" }]}>Core Fee Total</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£72,000</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£170,000</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£280,000</Text>
      </View>
    </View>

    <Text style={[styles.caption, { marginBottom: 4, marginTop: 8 }]}>Research Partner Costs (Estimated Range)</Text>
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderCell, { width: "40%" }]}>Scope</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Bronze</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Silver</Text>
        <Text style={[styles.tableHeaderCell, { width: "20%", textAlign: "center" }]}>Gold</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Markets covered</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>1</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>2</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>5</Text>
      </View>
      <View style={styles.tableRowAlt}>
        <Text style={[styles.tableCell, { width: "40%" }]}>Estimated range</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£15,000–£28,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£30,000–£48,000</Text>
        <Text style={[styles.tableCell, { width: "20%", textAlign: "center" }]}>£55,000–£80,000</Text>
      </View>
      <View style={[styles.tableRow, { backgroundColor: colors.lightGrey }]}>
        <Text style={[styles.tableCellBold, { width: "40%" }]}>Total Investment Range</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£87,000–£100,000</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£200,000–£218,000</Text>
        <Text style={[styles.tableCellBold, { width: "20%", textAlign: "center" }]}>£335,000–£360,000</Text>
      </View>
    </View>

    <Text style={styles.subHeading}>4.3 Research Partner</Text>
    <Text style={styles.body}>
      ThreePoint will work with Delineate as our preferred research partner for quantitative survey design, fieldwork, and data analysis. Delineate specialises in enterprise technology research across global markets and has experience with similar voice AI and workplace technology studies.
    </Text>
    <Text style={styles.body}>
      Prior to programme commencement, ThreePoint will conduct a structured brief with two to three preferred research suppliers — including Delineate — to confirm final costs, methodology, and deliverable scope. This process ensures Jabra receives competitive pricing and best-in-class research quality. The estimated ranges above represent ThreePoint's current expectation based on comparable programmes.
    </Text>
    <Text style={styles.body}>
      Research partner costs will be invoiced directly to ThreePoint and included in the programme fee structure; Jabra will not be required to manage a separate supplier relationship.
    </Text>

    <Text style={styles.subHeading}>4.4 Payment Terms</Text>
    <Text style={styles.body}>
      Invoiced in quarterly instalments. 50% deposit on contract execution. Remaining 50% across three equal quarterly payments. All invoices payable within 30 days. Prices quoted in GBP and exclude VAT.
    </Text>
    <PageFooter pageNumber={5} />
  </Page>
);

// Page 6 - About & Terms
const AboutPage = () => (
  <Page size="A4" style={styles.page}>
    <PageHeader />
    <Text style={styles.sectionHeading}>5. About ThreePoint Labs</Text>
    <Text style={styles.body}>
      ThreePoint Labs Limited is a UK-registered AI transformation consultancy (Company No. 11734247). Founded by James Poulter, ThreePoint helps corporations, agencies, and non-profits navigate AI transformation with practical, ethical strategies. ThreePoint has advised organisations including Amazon, Verizon, LEGO, Bosch, Bloomsbury, and Universal Music. James Poulter serves as Fractional Head of AI at Elvis London and Dunham & Company, and sits on the boards of Christian Aid and Christian Vision.
    </Text>

    <Text style={styles.sectionHeading}>6. Proposed Next Steps</Text>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>1.</Text>
      <Text style={styles.numberedText}>Review this proposal with relevant stakeholders</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>2.</Text>
      <Text style={styles.numberedText}>Schedule a discovery call with James Poulter to discuss programme customisation</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>3.</Text>
      <Text style={styles.numberedText}>Identify preferred investment tier and confirm scope</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>4.</Text>
      <Text style={styles.numberedText}>ThreePoint to issue formal Statement of Work and contract</Text>
    </View>
    <View style={styles.numberedItem}>
      <Text style={styles.numberedNumber}>5.</Text>
      <Text style={styles.numberedText}>Programme kick-off within 2 weeks of contract execution</Text>
    </View>

    <Text style={styles.subHeading}>6.1 Contact</Text>
    <Text style={styles.body}>
      James Poulter | Founder, ThreePoint Labs{"\n"}
      jp@threepoint.io | threepoint.io
    </Text>
    <Text style={styles.body}>
      Programme Coordination:{"\n"}
      Jemma | jemma@poulterventures.com{"\n"}
      Subject line: Jabra Voice AI Programme — [Your name]
    </Text>

    <Text style={styles.sectionHeading}>7. Confidentiality</Text>
    <Text style={styles.body}>
      This proposal is submitted in confidence and is intended solely for the use of the named recipient. It may not be reproduced, distributed, or disclosed to any third party without the prior written consent of ThreePoint Labs Limited.
    </Text>

    <View style={styles.bottomRule} />
    <Text style={styles.bottomText}>
      ThreePoint Labs Limited | 77 Avery Hill Road, London SE9 2BJ | Company No. 11734247 | threepoint.io
    </Text>
    <PageFooter pageNumber={6} />
  </Page>
);

// Main Document
export const JabraProposalPDF = () => (
  <Document
    title="ThreePoint Labs — Voice AI Research Programme — Commercial Proposal"
    author="ThreePoint Labs"
    subject="Commercial Proposal for Jabra"
    keywords="Voice AI, Jabra, Research, ThreePoint Labs, Proposal, SOW"
  >
    <CoverPage />
    <ExecutiveSummaryPage />
    <ProgrammeScopePage />
    <ExpertPanelPage />
    <InvestmentPage />
    <AboutPage />
  </Document>
);

export default JabraProposalPDF;
