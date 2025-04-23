import React from 'react';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import SkillNormalButton from './Buttons/skill-normal-button';
import { characterData } from '../../data/characters/characterRegistry';

interface SkillSiderProps {
  selectedCharacter: characterData | null;
  currentSiderSide: 'attack' | 'defense';
}

const SkillSider: React.FC<SkillSiderProps> = ({
  selectedCharacter,
  currentSiderSide,
}) => {
  const noCharacterSelected = (
    <div
      style={{
        transform: 'rotate(180deg)',
        writingMode: 'vertical-rl',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '2rem 0',
      }}>
      <Text weight={100} style={{ color: 'var(--semi-color-disabled-text)' }}>
        Drag a character from the sidebar to get started!
      </Text>
    </div>
  );

  return (
    <div>
      {selectedCharacter ? (
        <SkillNormalButton
          sideData={selectedCharacter[currentSiderSide]!}
          onClick={() => 0}
        />
      ) : (
        noCharacterSelected
      )}
    </div>
  );
};

export default SkillSider;
