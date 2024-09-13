import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LanguageSquareIcon({
  iconName = 'language-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
