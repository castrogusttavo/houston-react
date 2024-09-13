import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBottomIcon({
  iconName = 'align-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
