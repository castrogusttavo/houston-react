import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LanguageCircleIcon({
  iconName = 'language-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
