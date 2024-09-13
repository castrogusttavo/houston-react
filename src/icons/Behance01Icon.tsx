import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Behance01Icon({
  iconName = 'behance-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
