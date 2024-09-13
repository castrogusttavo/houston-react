import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LanguageSkillIcon({
  iconName = 'language-skill',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
