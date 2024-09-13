import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframesMultipleAddIcon({
  iconName = 'keyframes-multiple-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
