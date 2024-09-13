import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextIndent01Icon({
  iconName = 'text-indent-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
