import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBoxBottomRightIcon({
  iconName = 'align-box-bottom-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
