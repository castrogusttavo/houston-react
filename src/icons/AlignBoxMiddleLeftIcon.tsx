import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlignBoxMiddleLeftIcon({
  iconName = 'align-box-middle-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
