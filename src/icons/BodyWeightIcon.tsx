import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodyWeightIcon({
  iconName = 'body-weight',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
