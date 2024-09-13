import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashedLine01Icon({
  iconName = 'dashed-line-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
