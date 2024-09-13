import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextIndentLessIcon({
  iconName = 'text-indent-less',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
