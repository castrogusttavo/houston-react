import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextSmallcapsIcon({
  iconName = 'text-smallcaps',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
