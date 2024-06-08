import "./AsideMenu.css";
import GroupSection from "components/GroupSection/GroupSection";

export default function AsideMenu(): JSX.Element {
  return (
    <div id="aside-menu">
      <GroupSection title="explorer"></GroupSection>
      <GroupSection title="actions"> </GroupSection>
    </div>
  );
}
