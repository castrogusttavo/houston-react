import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SignLanguageCIcon({
  iconName = 'sign-language-c',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
