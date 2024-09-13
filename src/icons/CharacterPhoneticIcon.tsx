import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CharacterPhoneticIcon({
  iconName = 'character-phonetic',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
